import AsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//  @desc Auth user & get token
//  @route POST /api/users/login
//  @access Public
const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if(user){

  }
});

export { authUser };
