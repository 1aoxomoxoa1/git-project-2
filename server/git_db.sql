use git_project;


create table users(
username varchar(7) not null,
email varchar(100) unique,
phone varchar(12) unique,
password varchar(30),
primary key(username));

create table orders(
order_ID int not null auto_increment,
date timestamp default now(),
items_num int not null,
total_price int as (items_num * 2.78),
username varchar(7),
primary key(order_ID),
foreign key(username) references users(username)
);