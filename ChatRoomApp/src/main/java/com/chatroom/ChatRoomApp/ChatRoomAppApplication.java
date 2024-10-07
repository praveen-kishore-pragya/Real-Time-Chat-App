package com.chatroom.ChatRoomApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ChatRoomAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChatRoomAppApplication.class, args);
		System.out.println("Project started!!");
	}
}
