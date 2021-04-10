-- CRUD: Create, Read, Update, Delete
-- SQL : Structured Query Language
-- Create
-- INSERT INTO books (bookName,writer,content) VALUES ('별주부전','작자미상','용왕이 나의간을...');

-- INSERT INTO books SET bookname='구운몽전',writer='구운몽',content='나비가 나를....';

-- Update
-- UPDATE books SET bookName='별주부전',writer='거북이' WHERE id=2;

-- Delete
-- DELETE FROM books WHERE id=3;

-- Read
-- SELECT * FROM books ORDER BY bookName ASC; -- ASC 
-- SELECT * FROM books ORDER BY id DESC LIMIT 0,5; -- 시작레코드,갯수 
-- SELECT COUNT(*) FROM books;

-- SELECT * FROM books WHERE bookName LIKE '%별주부%';
-- SELECT * FROM books 
-- WHERE 
-- bookName LIKE '%별주부%' OR
-- content LIKE '%별주부%'



-- JOIN
SELECT * FROM books.*, files.oriname, files.savename, files.id AS fid LEFT JOIN files ON books.id = files.bookid ORDER
 BY books.id DESC;





