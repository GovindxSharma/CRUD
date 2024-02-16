import express from 'express';
import { addUser, delUser, editUser, getUser, getUsers } from '../controller/user-controller.js';

const router=express.Router();

router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getUser)
router.put('/:id',editUser )
router.delete('/:id', delUser)

export default router;