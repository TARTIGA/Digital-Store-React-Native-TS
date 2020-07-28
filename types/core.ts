/* @flow */
export type TAction = {
  type: string,
  payload: any,
  error?: boolean,
  act?: any,
};

export type TPromiseAction = Promise<TAction>;

// eslint-disable-next-line no-use-before-define
export type TThunkAction = (TDispatch) => any;

export type TDispatch = (
  TAction | TPromiseAction | TThunkAction | Array<TAction>
) => void;

export type TLink = {
  text: String,
  color: String,
  fontSize:String,
  fontWeight:Number,
  handler:<T>(param: T) => T
};

export type TSlider = {
  images:Array<any>,
  dotted:Boolean,
  timeout:Number,
  autoplay:Boolean,
  loop:Boolean,
  parentWidth:Number,
  resizeMode:String,
};

export type TSellOut = {
  text: String,
  color: String,
  fontSize:String,
  fontWeight:Number,
  handler:<T>(param: T) => T
};

export type TIconBadge= {
  name:String,
  badgeCount:Number,
  color:String, 
  size:String
};


export type TButton= {
  bgColor:String,
  bRadius:Number,
  width:String,
  height:Number,
  handler:<T>(param: T) => T,
  disabled:Boolean,
  textColor:String
  label:String,
  icon:any
};

export type TItemHandler = {
  item: any,
  handler:<T>(param: T) => T
};



