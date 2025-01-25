package models

import (
	"github.com/lib/pq"
	"time"
)

type Comment struct {
	ID        int64          `json:"id"`
	Author    string         `json:"author"`
	Text      string         `json:"text"`
	Upvotes   pq.StringArray `json:"upvotes"`
	Downvotes pq.StringArray `json:"downvotes"`
	Comments  pq.Int64Array  `json:"comments"`
	CreatedAt time.Time      `json:"created_at"`
}
