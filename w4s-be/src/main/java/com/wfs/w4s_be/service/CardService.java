package com.wfs.w4s_be.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wfs.w4s_be.data.CardRepository;
import com.wfs.w4s_be.model.Card;

@Service
public class CardService {

    @Autowired
    private CardRepository cardRepository;

    public List<Card> getAllCardData() {
        return cardRepository.findAll();
    }
}
