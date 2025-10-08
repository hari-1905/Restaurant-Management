package com.example.restaurant.controller;

import com.example.restaurant.Booking;
import com.example.restaurant.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepo;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        // 🛠 Debug line to check if email is received from frontend
        System.out.println("📩 Received Email: " + booking.getEmail());
        return bookingRepo.save(booking);
    }
}