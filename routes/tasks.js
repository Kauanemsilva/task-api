const express = require("express");
const router = express.Router();
const db = require("../db");

// GET todas as tarefas
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM Tasks");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST nova tarefa
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    await db.query(`
      INSERT INTO Tasks (title, description)
      VALUES (@title, @description)
    `, {
      title,
      description
    });
    res.status(201).send("Tarefa criada!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
