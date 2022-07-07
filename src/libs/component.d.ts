export interface userProp {
  username: string;
  password: string;
  balance?: any;
  digits?: number[];
}

export interface InsertMethods {
  // setState Variables:
  eventSetSignup(value: {}): void;
  eventSetLogin(value: userProp): void;
  eventIsLoggedIn(value: boolean): void;
  // useState Variables
  state_user: userProp;
  state_newUser: {};
  state_userArray: userProp[];
  state_isLoggedIn: boolean;
}

export interface DashboardMethods {
  // setState Variables:
  eventSetInputAmount(value: number): void;
  eventSetEventMethod(value: string): void;
  eventSetBalance(value: number): void;
}
