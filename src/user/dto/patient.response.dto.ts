import { Expose } from "class-transformer";
import { Address } from "src/address/entities/address.entity";
import { UserResponseDto } from "./user.response.dto";





export class PatientResponseDto {

    @Expose()
    user_id: string

    @Expose()
    user_name: string

    @Expose()
    user_email: string

    @Expose()
    user_status: boolean

    @Expose()
    user_date_of_birth: string

    @Expose()
    user_phone: string

    @Expose()
    user_enrollment: string

    @Expose()
    user_profile_id: number

    @Expose()
    create_at: Date

    @Expose()
    update_at: Date

    @Expose()
    psychologist: UserResponseDto

    @Expose()
    address: Address

}