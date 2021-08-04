DROP SCHEMA IF EXISTS zoologico;
    CREATE SCHEMA zoologico;
    USE zoologico;

    CREATE TABLE sexo(
        sexoID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        sexo VARCHAR(100) NOT NULL 
    );

    INSERT INTO sexo(sexo)
    VALUES('masculino'),
          ('feminino');
          
    CREATE TABLE nomes(
        nomeID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL 
    );
    
    INSERT INTO nomes(nome)
    VALUES('João'),
          ('Maria'),
          ('Carla'),
          ('Pedro'),
          ('Caio'),
          ('Theo'),
          ('Billy'),
          ('Bob'),
          ('Nina'),
          ('Lara'),
          ('Lilica'),
          ('Hannah');
          
	CREATE TABLE especies(
        especieID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        especie VARCHAR(100) NOT NULL 
    );
    
    INSERT INTO especies(especie)
    VALUES('tigre'),
          ('leao'),
          ('macaco'),
          ('jiboia'),
          ('jacaré'),
          ('lobo'),
          ('onça'),
          ('urso'),
          ('tamanduá'),
          ('papagaio'),
          ('arara'),
          ('babuino');
          
	CREATE TABLE logradouro(
        logradouroID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        logradouro VARCHAR(100) NOT NULL 
    );

    INSERT INTO logradouro(logradouro)
    VALUES('Praça 7 de Setembro'),
          ('Avenida Santos Dumont'),
          ('Rua Rio de Janeiro'),
          ('Rua São Paulo'),
          ('Praça da Estação'),
          ('Rua Primeiro de Maio'),
          ('Praça da Assembleia');
          
	CREATE TABLE cidade(
        cidadeID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        cidade VARCHAR(100) NOT NULL 
    );

    INSERT INTO cidade(cidade)
    VALUES('Belo Horizonte'),
          ('São Paulo'),
          ('Rio de Janeiro'),
          ('Brasilia'),
          ('Salvador');
          
	CREATE TABLE bairro(
        bairroID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        bairro VARCHAR(100) NOT NULL 
    );

    INSERT INTO bairro(bairro)
    VALUES('Centro'),
          ('Esplanada'),
          ('Planalto'),
          ('Lapa'),
          ('Pompeia');
          
	CREATE TABLE estado(
        estadoID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        estado VARCHAR(100) NOT NULL 
    );

    INSERT INTO estado(estado)
    VALUES('Minas Gerais'),
          ('São Paulo'),
          ('Bahia'),
          ('Rio de Janeiro'),
          ('Paraná');
          
   CREATE TABLE localizacao(
        locID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        logradouroID INT NOT NULL,
        bairroID INT NOT NULL,
        cidadeID INT NOT NULL,
        estadoID INT NOT NULL,
        FOREIGN KEY (logradouroID) REFERENCES logradouro (logradouroID),
        numero INT, 
        FOREIGN KEY (bairroID) REFERENCES bairro (bairroID),
        FOREIGN KEY (cidadeID) REFERENCES cidade (cidadeID),
        cep INT NOT NULL,
        FOREIGN KEY (estadoID) REFERENCES estado (estadoID)
    );
    
     CREATE TABLE gerentes(
        gerenteID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nomeID INT NOT NULL,
		-- cuidadorID INT NOT NULL, 
        locID INT NOT NULL,
        sexoID INT NOT NULL,
        FOREIGN KEY (nomeID) REFERENCES nomes (nomeID),
        -- FOREIGN KEY (cuidadorID) REFERENCES cuidadores (cuidadorID),
        FOREIGN KEY (locID) REFERENCES localizacao (locID),
        FOREIGN KEY (sexoID) REFERENCES sexo (sexoID)
    );
    
    CREATE TABLE cuidadores(
        cuidadorID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nomeID INT NOT NULL,
        -- animalID INT NOT NULL,
       -- gerenteID INT NOT NULL,
        locID INT NOT NULL,
        sexoID INT NOT NULL,
        FOREIGN KEY (nomeID) REFERENCES nomes (nomeID),
        -- FOREIGN KEY (animalID) REFERENCES animal (animalID),
        -- FOREIGN KEY (gerenteID) REFERENCES gerentes (gerenteID),
        FOREIGN KEY (locID) REFERENCES localizacao (locID),
        FOREIGN KEY (sexoID) REFERENCES sexo (sexoID)
    );
    
 CREATE TABLE animal(
        animalID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nomeID INT NOT NULL,
        especieID INT NOT NULL,
        cuidadorID INT NOT NULL,
        locID INT NOT NULL,
        sexoID INT NOT NULL,
        FOREIGN KEY (nomeID) REFERENCES nomes (nomeID),
        FOREIGN KEY (especieID) REFERENCES especies (especieID),
		FOREIGN KEY (cuidadorID) REFERENCES cuidadores (cuidadorID),
        FOREIGN KEY (locID) REFERENCES localizacao (locID),
        FOREIGN KEY (sexoID) REFERENCES sexo (sexoID)
    );
    
     ALTER TABLE gerentes ADD COLUMN cuidadorID INT NOT NULL;
     ALTER TABLE cuidadores ADD COLUMN animalID INT NOT NULL;
     ALTER TABLE cuidadores ADD COLUMN gerenteID INT NOT NULL;
     
     ALTER TABLE gerentes ADD FOREIGN KEY (cuidadorID) REFERENCES cuidadores(cuidadorID);
     ALTER TABLE cuidadores ADD FOREIGN KEY (animalID) REFERENCES animal(animalID);
     ALTER TABLE cuidadores ADD FOREIGN KEY (gerenteID) REFERENCES gerentes(gerenteID);
    