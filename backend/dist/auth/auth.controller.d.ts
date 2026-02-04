import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: any): Promise<{
        id: import("mongoose").Types.ObjectId;
        email: string;
    }>;
    login(body: any): Promise<{
        accessToken: string;
    }>;
}
