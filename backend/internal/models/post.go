package models

import (
	"github.com/lib/pq"
	"time"
)

type Post struct {
	ID        int64          `json:"id"`
	Author    string         `json:"author"`
	Category  string         `json:"category"`
	Tags      pq.StringArray `json:"tags"`
	Title     string         `json:"title"`
	Body      string         `json:"body"`
	Upvotes   pq.StringArray `json:"upvotes"`
	Downvotes pq.StringArray `json:"downvotes"`
	Comments  pq.Int64Array  `json:"comments"`
	CreatedAt time.Time      `json:"created_at"`
}
