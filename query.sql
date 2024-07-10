Create DATABASE Ferreteria;
Use Ferreteria;
-- Comienzo con la creacion de la tabla
Create Table Usuarios (
idUsuario int auto_increment primary key,
nombreUsuario varchar(50) not null,
contraseña varchar(40) not null,
disponibleU bool default 1
);
Create Table Clientes (
idCliente int auto_increment primary key,
apynomCliente varchar(100) not null,
dniC varchar(20) not null,
emailC varchar(50) not null,
telefonoC varchar(20),
domicilioC varchar(100),
disponibleC bool default 1
);
Create Table Empleados (
idEmpleado int auto_increment primary key,
nombreEmpleado varchar(100) not null,
dniE varchar(20) not null,
emailE varchar(50) not null,
telefonoE varchar(20),
domicilioE varchar(100),
disponibleE bool default 1
);
Create Table Productos (
idProducto int auto_increment primary key,
nombreProd varchar(100) not null,
precio decimal(10, 2) not null,
cantidad int not null,
categoria varchar(100),
descripcion text,
disponibleP bool default 1
);
Create Table Ventas (
idVenta int auto_increment primary key,
idEmpleado int,
idCliente int,
fechaVenta varchar(50) not null,
totalVenta decimal(10, 2) not null,
metodoPago varchar(50),
disponibleV bool default 1,
foreign key (idEmpleado) references Empleados(idEmpleado),
foreign key (idCliente) references Clientes(idCliente)
);
Create Table DetalleVenta (
idDetalle int auto_increment primary key,
idVenta int,
idProducto int,
cantidad int not null,
precioUni decimal(10, 2) not null,
disponibleDV bool default 1,
foreign key (idVenta) references Ventas(idVenta),
foreign key (idProducto) references Productos(idProducto)
);
-- Inserto los ejemplos que cumplan con lo que se necesita para hacer el
-- calculo de los productos comprados

Insert into Usuarios (nombreUsuario,contraseña,disponibleU) values ('empleado','12345',1);

Insert into Clientes (apynomCliente, dniC, emailC, telefonoC, domicilioC,disponibleC)
Values ('Pepito', '38134515', 'pepito@example.com', '0123456789', 'Salta 3800',1),
('Juan Perez','25636954','juanperez@gmail.com','385636985','Calle 78 254',1),
('Santiago Juarez','67584930','santiagojuarez@gmail.com','3812013001','Calle 89 154',1),
('Anabella Clessi','57392018','anabellaclessi@gmail.com','3812013441','Calle 23 654',1),
('Matias Diaz','475839102','matiasdiaz@gmail.com','3812054992','Calle 99 421',1),
('Carlos Mule','947102934','carlosmule@gmail.com','38134553','Calle 43 643',1);

Insert into Empleados (nombreEmpleado, dniE, emailE, telefonoE, domicilioE,disponibleE)
Values ('Juan Mecanico', '87654321', 'juanmeca@example.com', '0987654321', 'Rep. del
Libano 123',1),
('Pablo Nuñez','27984555','pablonuñez@hotmail.com','396537888','Rivadavia 957',1),
('Camila Velez','54638273','camilavelez@gmail.com','3812345773','Calle 75 234',1),
('Tobias Chavarria','39502918','tobiaschavarria@gmail.com','3812054668','Calle 67 990',1),
('Franco Leiva','44616784','francoleiva@gmail.com','3812023441','Calle 76 100',1),
('Tomas Pereyra','85938573','tomaspereyra@gmail.com','3815023445','Calle 98 174',1);

Insert into Productos (nombreProd, precio, cantidad, categoria, descripcion,disponibleP)
Values ('Martillo', 50.00, 100, 'Herramientas', 'Martillo de acero',1),
('Taladro', 150.00, 50, 'Herramientas', 'Taladro eléctrico',1),
('Destornillador', 50.0, 5, 'Herramientas', 'Destornillador de precisión con punta
magnética',1),
('Sierra', 175.25, 2, 'Construcción', 'Sierra manual para cortes finos en madera y metal',1),
('Llave inglesa', 80.0, 4, 'Herramientas', 'Llave inglesa ajustable para tuercas de diferentes
tamaños',1);

Insert into Ventas (idEmpleado,idCliente,fechaVenta,totalVenta,metodoPago,disponibleV)
values (1, 1 ,'05/03/2024',5000.0,'Efectivo',1),
(2, 2, '23/05/2024', 1500.0, 'Tarjeta de Crédito',1),
(3, 3, '01/07/2024', 3000.0, 'Transferencia Bancaria',1),
(4, 4, '04/02/2024', 2500.0, 'Efectivo',1),
(5, 5, '15/09/2024', 4500.0, 'Tarjeta de Débito',1);

Insert into DetalleVenta (idVenta,idProducto,cantidad,precioUni,disponibleDV) values
(1,1,50,5000.0,1),
(2,2,30,2000.0,1),
(3,3,50,4000.0,1),
(4,4,60,6000.0,1),
(5,5,20,7000.0,1);
