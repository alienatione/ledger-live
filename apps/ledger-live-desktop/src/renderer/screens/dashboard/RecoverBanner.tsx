import { Text } from "@ledgerhq/react-ui";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "~/renderer/components/Box";
import Image from "~/renderer/components/Image";

type Props = {
  title: string;
  description: string;
  linkContent?: string;
  redirectTo?: string;
  imagePath: string;
};

export default function RecoverBanner({ title, description, linkContent, redirectTo, imagePath }: Props) {
  return (
    <Card p={0} py={5}>
      <Text>{ title }</Text>
      <Text>{ description }</Text>
      <Link to={"#"}>{ linkContent }</Link>
      <Image resource={imagePath} alt={"recover notification"} />
    </Card>
  );
}
