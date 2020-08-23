package com.fernando.backend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/carro")
public class CarroRest {

	@Autowired
	private CarroDao carroDao;
	
	@GetMapping("/filter/placa/{placa}")
	public Carro filter(@PathVariable String placa){
		return carroDao.findByPlaca(placa);
	}
	
	@GetMapping("/filter/id/{id}")
	public Optional<Carro> filter(@PathVariable int id){
		return carroDao.findById(id);
	}
	
	@GetMapping
	public List<Carro> get(){
		return carroDao.findAll();
	}
	
	@PostMapping
	public void post(@RequestBody Carro carro) {
		carroDao.save(carro);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id){
		carroDao.deleteById(id);
	}
	
	@PutMapping
	public void update(@RequestBody Carro carro) {
		carroDao.save(carro);
	}
	
}
