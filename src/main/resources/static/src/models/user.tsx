import { Effect, ImmerReducer, Subscription } from 'umi';
export interface UserModelState {
  name: string;
}
export interface IndexModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: ImmerReducer<UserModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<UserModelState>;
  };
  subscriptions: { setup: Subscription };
}
const UserModel: IndexModelType = {
  namespace: 'user',
  state: {
    name: '',
  },
  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state, action) {
      state.name = action.payload;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log("user setup");
      // return history.listen(({ pathname }) => {
      //   if (pathname === '/') {
      //     dispatch({
      //       type: 'query',
      //     })
      //   }
      // });
    }
  }
};
export default UserModel;
