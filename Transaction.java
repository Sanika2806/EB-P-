package com.example.stocksimulator.models;

import java.time.LocalDateTime;

public class Transaction {
    private String type; // BUY or SELL
    private String symbol;
    private int quantity;
    private double price;
    private LocalDateTime timestamp;

    // Constructor, getters, and setters
}
