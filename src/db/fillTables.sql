insert into users (name, email, password) values
('Arkadiusz','arkadiusz@shop.com', 'FzdvFXGZ1scl1Lv'),
('Dzmitry','dzmitry@shop.com', '4gjHXO5vVQFiQ9R'),
('Gregory','gregory@shop.com', '7oV73RbQkE8ESGV'),
('Hector','hector@shop.com', '5ZZmscNOGRKMyXQ'),
('Mykhailo','mykhailo@shop.com', 'LajUNbJXTfsjDF7');

insert into carts (user_id, created_at, updated_at, status) values
('7c6b251d-d424-4f0a-8b86-708f5851cab0','2023-02-21', '2023-03-11', 'OPEN'),
('130e9c1a-dd29-4fb3-b47c-715d47191c5b','2023-02-22', '2023-03-01', 'OPEN'),
('6d6d27b8-8a9a-4347-8e6c-9daa97c14e91','2023-02-23', '2023-02-27', 'OPEN'),
('64a118d4-510e-46b0-ac95-e467deb20e2f','2023-02-24', '2023-04-02', 'OPEN'),
('cd4175d2-f6c0-4c24-82d4-d0300df2e852','2023-02-26', '2023-03-21', 'OPEN');

insert into cart_items (cart_id, product_id, count) values
('f4af4c9a-4c29-4104-9a4a-a2a17e7662c2','40ac4846-6923-4917-8a11-c8edbfbb5082', '1'),
('e6585b9d-4cf6-47b0-8d97-e22aedd3cd7c','a5d27c53-1658-41ac-8e0e-47af4405bd79', '1'),
('e6585b9d-4cf6-47b0-8d97-e22aedd3cd7c','80294eeb-b894-4714-bdc7-b591dcb93373', '1'),
('abd9f3c4-c7bf-4344-8925-3014b15adfec','e27474b1-fa6b-4c53-a7c6-0fde40f791da', '2'),
('cc4e8144-19f6-411d-ac6b-e41568fddf7e','cb226cbf-4c45-4bb9-b906-86a4c2aa1ee4', '1'),
('0cfefbce-4161-4e0b-80bc-1d6bc1cf0358','0112b209-1cdb-4cdc-a686-09385bb8c235', '3');

insert into orders (user_id, cart_id, payment, delivery, comments, total, status) values
('7c6b251d-d424-4f0a-8b86-708f5851cab0','f4af4c9a-4c29-4104-9a4a-a2a17e7662c2', '{"type": "cash", "summ": "10"}', '{"country": "Turkey", "city": "Antalya"}', 'Thank you!', '23', 'ORDERED'),
('130e9c1a-dd29-4fb3-b47c-715d47191c5b','e6585b9d-4cf6-47b0-8d97-e22aedd3cd7c', '{"type": "card", "summ": "10"}', '{"country": "Turkey", "city": "Kemer"}', 'Enjoy!', '43', 'ORDERED');
