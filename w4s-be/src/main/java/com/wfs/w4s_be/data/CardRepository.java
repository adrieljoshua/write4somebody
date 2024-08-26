package com.wfs.w4s_be.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wfs.w4s_be.model.Card;

public interface CardRepository extends JpaRepository<Card, Long> {
}