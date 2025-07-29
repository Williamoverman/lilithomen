CREATE TABLE Killers (
    id SERIAL PRIMARY KEY,
    killer_name VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL UNIQUE,
    gender VARCHAR(50) NOT NULL,
    power VARCHAR(100) NOT NULL,
    movement_speed FLOAT NOT NULL,
    terror_radius INTEGER NOT NULL,
    icon VARCHAR(100) NOT NULL,
    bg VARCHAR(100) NOT NULL
);

CREATE TABLE Survivors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    gender VARCHAR(50) NOT NULL,
    icon VARCHAR(100) NOT NULL,
    bg VARCHAR(100) NOT NULL
);

CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Rarities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Killer_Perks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    killer_id INTEGER,
    icon VARCHAR(100) NOT NULL,
    FOREIGN KEY (killer_id) REFERENCES Killers(id) ON DELETE SET NULL
);

CREATE TABLE Survivor_Perks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    survivor_id INTEGER,
    icon VARCHAR(100) NOT NULL,
    FOREIGN KEY (survivor_id) REFERENCES Survivors(id) ON DELETE SET NULL
);

CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    category_id INTEGER,
    name TEXT NOT NULL UNIQUE,
    rarity_id INTEGER,
    icon TEXT,
    FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE CASCADE,
    FOREIGN KEY (rarity_id) REFERENCES Rarities(id) ON DELETE RESTRICT
);

CREATE TABLE Killer_Addons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    killer_id INTEGER,
    rarity_id INTEGER,
    icon VARCHAR(100) NOT NULL,
    FOREIGN KEY (killer_id) REFERENCES Killers(id) ON DELETE SET NULL,
    FOREIGN KEY (rarity_id) REFERENCES Rarities(id) ON DELETE RESTRICT
);

CREATE TABLE Item_Addons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INTEGER,
    rarity_id INTEGER,
    icon VARCHAR(100) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE CASCADE,
    FOREIGN KEY (rarity_id) REFERENCES Rarities(id) ON DELETE RESTRICT
);