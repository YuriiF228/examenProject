import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../users/users.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    register(email: string, password: string): Promise<{
        id: import("mongoose").Types.ObjectId;
        email: string;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
