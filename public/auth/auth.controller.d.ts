import { AuthService } from './auth.service';
import { SingUpDto } from './dto/signUp_dto';
import { LoginDto } from './dto/login_dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    singUp(signUpDto: SingUpDto): Promise<{
        token: string;
    }>;
    login(loginUpDto: LoginDto): Promise<{
        token: string;
    }>;
}
