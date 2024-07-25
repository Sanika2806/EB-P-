package com.example.stocksimulator.controllers;

import com.example.stocksimulator.models.Stock;
import com.example.stocksimulator.models.Transaction;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StockController {

    @GetMapping("/portfolio")
    public List<Stock> getPortfolio() {
        // Implement logic to fetch user's portfolio from database or service
        return null; // Replace with actual implementation
    }

    @GetMapping("/transactions")
    public List<Transaction> getTransactions() {
        // Implement logic to fetch user's transaction history from database or service
        return null; // Replace with actual implementation
    }

    @PostMapping("/buy")
    public void buyStock(@RequestBody Stock stock) {
        // Implement logic to process buy transaction
    }

    @PostMapping("/sell")
    public void sellStock(@RequestBody Stock stock) {
        // Implement logic to process sell transaction
    }
}
