import React from "react";
import {
  GetRecommendationsCommand,
  PersonalizeRuntimeClient,
} from "@aws-sdk/client-personalize-runtime";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const getRecommendations = async (userId: string = "") => {
  try {
    const client = new PersonalizeRuntimeClient({
      region: "us-east-1",
      credentials: fromCognitoIdentityPool({
        identityPoolId: "us-east-1:5c6dee01-8ea0-411a-b834-b820f32d4e34",
        clientConfig: { region: "us-east-1" },
      }),
    });

    const params = {
      campaignArn:
        "arn:aws:personalize:us-east-1:999975885763:campaign/my-product-campaign",
      userId,
      numResults: 30,
    };

    const command = new GetRecommendationsCommand(params);

    const response = await client.send(command);
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
};

const Home: React.FC = async () => {
  const recommendItems = await getRecommendations(
    "9d8690c1-fee4-42bc-8402-c340121aa270"
  );
  return (
    <div className="flex flex-col gap-10">
      <h1>Recommend for you.</h1>
      <div className="flex flex-1 flex-wrap gap-5">
        {recommendItems?.itemList?.map((item, index) => {
          return <div key={index}>{item.itemId}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
