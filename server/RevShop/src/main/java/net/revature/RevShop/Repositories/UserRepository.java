package net.revature.RevShop.Repositories;



import net.revature.RevShop.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Modifying
    @Query(value = "SELECT * FROM users WHERE user_id = ?1", nativeQuery = true)
    User findUserByUserId(Integer userId);

    User findByUsername(String username);

    boolean existsByUsername(String username);

}