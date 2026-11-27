CREATE TABLE `user_preference` (
	`user_id` text PRIMARY KEY NOT NULL,
	`preferred_language` text,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "user_preference_language_check" CHECK(preferred_language is null or preferred_language in ('JavaScript', 'Python', 'Go'))
);
