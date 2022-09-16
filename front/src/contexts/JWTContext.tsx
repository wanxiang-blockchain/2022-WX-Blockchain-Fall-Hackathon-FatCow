import { createContext, ReactNode, useEffect, useReducer } from 'react';
// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';
import { getActiveAccount, checkActiveAccount, clearActiveAccount } from '../utils/dAPPClient';
// @types
import { ActionMap, AuthState, AuthUser, JWTContextType } from '../@types/auth';
import { DAppClient } from '@airgap/beacon-sdk';

// ----------------------------------------------------------------------

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER',
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

export type JWTActions = ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);
const dAppClient = new DAppClient({ name: 'Beacon Docs' });

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    password: 'demo1234',
    photoURL: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_default.jpg',
    phoneNumber: '+40 777666555',
    country: 'United States',
    address: '90210 Broadway Blvd',
    state: 'California',
    city: 'San Francisco',
    zipCode: '94116',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  };

  useEffect(() => {
    const initialize = async () => {
      // const address = await getActiveAccount();
      // if (address) {
      //   dispatch({
      //     type: Types.Initial,
      //     payload: {
      //       isAuthenticated: true,
      //       user,
      //     },
      //   });
      // } else {
      //   dispatch({
      //     type: Types.Initial,
      //     payload: {
      //       isAuthenticated: false,
      //       user: null,
      //     },
      //   });
      // }
      const address = await getActiveAccount();
      dispatch({
        type: Types.Initial,
        payload: {
          isAuthenticated: true,
          user: address ? user : null,
        },
      });
    };

    initialize();
  }, []);

  const login = async () => {
    // const response = await axios.post('/api/account/login', {
    //   email,
    //   password,
    // });
    // const { accessToken, user } = response.data;
    // console.log(accessToken);
    // setSession(accessToken);
    // dispatch({
    //   type: Types.Login,
    //   payload: {
    //     user,
    //   },
    // });
    const address = await checkActiveAccount();
    console.log('test', address);
    if (address) {
      dispatch({
        type: Types.Login,
        payload: {
          user,
        },
      });
    } else {
      dispatch({
        type: Types.Login,
        payload: {
          user: null,
        },
      });
    }
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: Types.Register,
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    const res = await clearActiveAccount();
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
