package com.brewex.www.repo;

import com.brewex.www.model.Heading;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeadingRepository extends JpaRepository<Heading, Long> {
}

