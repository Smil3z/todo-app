CREATE TABLE TODOList (
    "id" SERIAL PRIMARY KEY,
    "Task" VARCHAR(100) NOT NULL,
    "Completed" BOOLEAN DEFAULT FALSE
    "Not Completed" BOOLEAN DEFAULT TRUE
);

INSERT INTO TODOList ("Task", "Completed")
VALUES 
  ('Take out the trash', true),
  ('Walk and feed the dog', false),
  ('Do homework', false),
  ('Wash the didhes', true),
  ('Have brewskis with the boys tonight', false),
  ('Buy groceries for the month', true);