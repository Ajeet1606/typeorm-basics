import { Request, Response } from "express";
import { User } from "../entity/user";
import { AppDataSource } from "../ormconfig";

const createUser = async (req: Request, res: Response) => {
  //insert
  const user = new User();

  user.firstName = "Sameer";
  user.lastName = "Patel";
  user.email = "ajeett101@gmail.com";
  user.password = "ajeet";

  if(await checkIfUserExists(user.email)){
    res.json({
        status: 'ok',
        message: 'User already exists.'
    })
  }
  //   const data:User = await AppDataSource.manager.save(user);
  const userRepo = AppDataSource.getRepository(User);



  const data = await userRepo.save(user);

  res.json({
    test: "ok",
    data: data,
  });
};

async function checkIfUserExists(userEmail: string): Promise<boolean> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({email: userEmail});
    return !!user; // Returns true if user exists, false otherwise
}

const getUsers = async (req: Request, res: Response) => {
//   const allUsers = await AppDataSource.manager.find(User);
const userRepo = AppDataSource.getRepository(User);
const allUsers = await userRepo.find()

  res.json({
    status: "ok",
    data: allUsers,
  });
};

const getUserById =async (req:Request, res: Response) => {
    const id = Number(req.params.id)

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({id: id}) //can search by any property.
    
    res.json({
        status: 'ok',
        data: user
    })
}

const updateUser =async (req:Request, res:Response) => {
    const id = Number(req.params.id);

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({id: id});
    
    if(user && user != null){
        user.firstName = 'Sameer';
        await userRepo.save(user);
        res.json({
            status:'ok',
            data: user,
            message: 'User updated.'
        })
    }else{
        res.json({
            status: 'ok',
            data: null,
            message: 'User does not exist'
        })
    }

}

const deleteUser = async (req:Request, res: Response) => {
    const id = Number(req.params.id);

    const userRepo = AppDataSource.getRepository(User)
    const user:User|null = await userRepo.findOneBy({id: id});
    if(user && user!=null){
        await userRepo.remove(user);

        res.json({
            status: 'ok',
            data: user,
            message: 'User deleted successfully'
        })
    }else{
        res.json({
            status: 'ok',
            message: 'User not found.'
        })
    }
}

export { createUser, getUsers, getUserById, updateUser, deleteUser };
