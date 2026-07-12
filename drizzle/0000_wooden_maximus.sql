CREATE TABLE "commissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"occasion" varchar(100) NOT NULL,
	"custom_occasion" text,
	"category" varchar(100) NOT NULL,
	"artwork_type" varchar(100),
	"story" text NOT NULL,
	"customization" text,
	"budget" varchar(100) NOT NULL,
	"completion_date" varchar(100) NOT NULL,
	"message" text,
	"schedule_call" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
