package com.chatroom.ChatRoomApp.Controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chatroom.ChatRoomApp.Entities.Message;

@Controller
public class MyController {

    @MessageMapping("/message")
    @SendTo("/topic/reply")
    public Message getContent(@Payload Message message)
    {
        return message;  //return the incoming message from one user and send it  
    }

    //NOTE:
    // 1.@MessageMapping("/message"):
    // This annotation maps incoming messages from clients sent to the '/app/message' destination.
    // When a client sends a message to '/app/message', Spring routes it to the sendMessage() method
    // in MessageController.
    // '/app' is the application destination prefix configured in Configuration file.


    // 2. @SendTo("/topic/return-to"):
    // This annotation specifies that the return value of the sendMessage() method should be sent
    // to clients subscribed to the '/topic/return_to' destination.




}
