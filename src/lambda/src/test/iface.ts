export interface IEvent {
  "CodePipeline.job": {
    id: string;
  };
}

export interface IParams {
  jobId: string;
}

export interface IPipeline {
  putJobSuccessResult: (req: IParams) => { promise: () => Promise<any> };
  PutJobFailureResult?: (req: IParams) => { promise: () => Promise<void> };
}
