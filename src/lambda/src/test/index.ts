import axios from "axios";
import AWS from "aws-sdk";
import { IEvent, IPipeline, IParams } from "./iface";

exports.handler = async (event: IEvent): Promise<void> => {
  const url = `https://hooks.slack.com/services/${process.env.SLAK_ID}`;

  const codepipeline: IPipeline = new AWS.CodePipeline();
  const jobId: string = event["CodePipeline.job"].id;
  const params: IParams = { jobId: jobId };

  try {
    await axios({
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        text: "🎉🎊 Successful build 🎉🎊",
      },
    });

    await codepipeline.putJobSuccessResult(params).promise();
  } catch (err) {
    if (err && codepipeline.PutJobFailureResult) {
      await codepipeline.PutJobFailureResult(params).promise();
    }
  }
};
