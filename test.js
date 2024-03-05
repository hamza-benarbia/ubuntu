const express = require('express');
const request = require('supertest');
const app = require ('./server');
 
  describe('task API ',() => {
  
  
  
  describe("POST / api/tasks" , () => {
      it (" it should GET all the tasks" , (done) => {
          chai.request(server)
          .get("/api/tasks")
          .end((err,response) =>{
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eq(3);
          done();
          })
      })
  
      it (" it should Nnot PPOST all the tasks" , (done) => {
          chai.request(server)
          .get("/api/task")
          .end((err,response) =>{
          response.should.have.status(404);
          
          done();
          })
      })
    })
  });