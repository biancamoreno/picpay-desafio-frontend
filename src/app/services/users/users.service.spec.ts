import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService, HttpTestingController]
    });
    service = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve users from the API GET', () => {
    const users = [
      {
        id: 1001,
        name: 'Eduardo Santos',
        img: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '@eduardo.santos'
      },
      {
        id: 1002,
        name: 'Marina Coelho',
        img: 'https://randomuser.me/api/portraits/women/37.jpg',
        username: '@marina.coelho'
      }
    ];
    service.getUsers().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(users);
    });
    const request = httpMock.expectOne(`${service.ROOT_URl}`);
    expect(request.request.method).toBe('GET');
    request.flush(users);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
