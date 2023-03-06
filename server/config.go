package main

import (
	"context"

	"github.com/sethvargo/go-envconfig"
)

type Config struct {
	App      AppConfig
	HTTP     HTTPConfig
	Postgres PostgresConfig
}

type AppConfig struct {
	LogLevel string `env:"LOG_LEVEL,default=warn"`
}

type HTTPConfig struct {
	Port            string   `env:"HTTP_PORT,required"`
	CorsAllowOrigin []string `env:"CORS_ALLOW_ORIGINS"`
}

type PostgresConfig struct {
	ConnStr string `env:"POSTGRES_CONNSTRING"`
}

// NewConfig returns Config object represents current environment variables or their defaults
func NewConfig() (config Config, err error) {
	err = envconfig.Process(context.Background(), &config)
	return
}
