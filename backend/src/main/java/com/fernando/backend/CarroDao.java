package com.fernando.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarroDao extends JpaRepository<Carro, Integer>{

	Carro findByPlaca(String placa);
}
