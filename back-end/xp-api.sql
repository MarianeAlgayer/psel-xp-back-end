DROP DATABASE IF EXISTS `xp-api`;

CREATE DATABASE `xp-api`;

USE `xp-api`;

CREATE TABLE shares (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(6) NOT NULL,
  qtd INT NOT NULL,
  value DECIMAL(5, 2) NOT NULL
) engine = InnoDB;

INSERT INTO shares (code, qtd, value)
VALUES
  ('ABCB4', 950, 16.48),
  ('ALPA4', 800, 20.65),
  ('ALUP11', 500, 26.99),
  ('ABEV3', 920, 14.45),
  ('ANIM3', 710, 4.57),
  ('ARZZ3', 840, 74.13),
  ('AZUL4', 500, 11.54),
  ('B3SA3', 100, 10.77),
  ('BRSR6', 430, 9.78),
  ('BBSE3', 550, 27.88),
  ('BKBR3', 980, 5.62),
  ('BRML3', 850, 7.81),
  ('BRPR3', 900, 8.42),
  ('BBDC3', 670, 14.19),
  ('BBDC4', 950, 17.01);