import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsArray()
  @IsString({each: true})
  @IsNotEmpty()
  readonly artist: string;
  @IsString()
  @IsDateString()
  readonly releaseDate: Date;
  @IsString()
  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: number;
}
