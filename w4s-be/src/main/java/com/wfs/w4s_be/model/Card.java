package com.wfs.w4s_be.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "letters") // Ensure this matches the actual table name in Supabase
public class Card {

    @Id
    @Column(name = "letter_id") // Map to the 'letterId' column
    private Long letterId;

    @Column(name = "created_at") // Map to the 'createdAt' column
    private LocalDateTime createdAt;

    @Column(name = "to_name") // Map to the 'toName' column
    private String toName;

    @Column(name = "message") // Map to the 'message' column
    private String message;

    @Column(name = "from_name") // Map to the 'fromName' column
    private String fromName;

    @Column(name = "color") // Map to the 'color' column
    private String color;

    // Getters and Setters
    public Long getLetterId() {
        return letterId;
    }

    public void setLetterId(Long letterId) {
        this.letterId = letterId;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getToName() {
        return toName;
    }

    public void setToName(String toName) {
        this.toName = toName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
