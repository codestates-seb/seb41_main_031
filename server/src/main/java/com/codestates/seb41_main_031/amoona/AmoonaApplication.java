package com.codestates.seb41_main_031.amoona;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class AmoonaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmoonaApplication.class, args);
	}

}
