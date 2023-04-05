---
title: 'Go query caching with PlanetScale Boost'
subtitle: 'Learn how to use PlanetScale Boost in a Go application.'
date: '2022-11-15'
---

{% callout %}
PlanetScale Boost is in limited beta. [Reserve your spot on the waitlist](/features/boost) today.
{% /callout %}

This guide will walk you through two methods to connect to your database using the [PlanetScale Boost query caching feature](/docs/concepts/query-caching-with-planetscale-boost) in Go. We'll first go over a simple example showing how to enable PlanetScale Boost for all queries, and then expand on it to create a separate connection that has the query cache enabled.

## Enable PlanetScale Boost on a SQL connection

Below is a simple code snippet showing how to connect to a PlanetScale database.

```go
package main

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", os.Getenv("DSN"))
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Fatalf("failed to ping: %v", err)
	}

	log.Println("Successfully connected to PlanetScale!")
}
```

In order for the connection to direct queries through your query cache, you’ll need to set the `@@boost_cached_queries` session variable. You may do so with the following query through your instance of `*sql.DB`:

```go
_, err := db.Exec("SET @@boost_cached_queries = true")
```

An updated version of the full code snippet might look like this:

```go
package main

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", os.Getenv("DSN"))
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	defer db.Close()

	// Enable query caching on the session.
	if _, err := db.Exec("SET @@boost_cached_queries = true"); err != nil {
		log.Fatalf("failed to enable boost: %v", err)
	}

	if err := db.Ping(); err != nil {
		log.Fatalf("failed to ping: %v", err)
	}

	log.Println("Successfully connected to PlanetScale!")
}
```

Using this method, all of your queries will be run through the boosted connection, even those that aren't using PlanetScale Boost. This may make it difficult to tell which queries are actually being boosted. For this reason, we recommend setting up two separate connections: one for regular queries and one for boosted queries.

## Set up multiple connections

Our recommended strategy for working with PlanetScale Boost is to use two separate connections so you can be explicit when executing your queries. Below is an updated version of the snippet with an additional function that enables query caching on a database connection:

```go
package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// Open a non-caching database connection.
	db, err := openDB(os.Getenv("DSN"), false)
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Fatalf("failed to ping: %v", err)
	}

	log.Println("Successfully connected to PlanetScale!")

	// Open a caching database connection.
	cacheDB, err := openDB(os.Getenv("DSN"), true)
	if err != nil {
		log.Fatalf("failed to connect with caching: %v", err)
	}
	defer cacheDB.Close()

	if err := cacheDB.Ping(); err != nil {
		log.Fatalf("failed to ping with caching: %v", err)
	}

	log.Println("Successfully connected to PlanetScale with query caching enabled!")
}

func openDB(dsn string, caching bool) (*sql.DB, error) {
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, fmt.Errorf("failed to connect: %v", err)
	}

	// Optionally enable query caching on the session.
	if caching {
		if _, err := db.Exec("SET @@boost_cached_queries = true"); err != nil {
			return nil, fmt.Errorf("failed to enable boost: %v", err)
		}
	}

	return db, nil
}
```
