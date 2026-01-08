import Icon from "../enums/icons";

import unsw from "../../static/images/logos/unsw.svg";
import uwa from "../../static/images/logos/uwa.svg";

import starbucks from "../../static/images/logos/starbucks.svg";
import gdut from "../../static/images/logos/gdut.svg";

import angular from "../../static/images/skills/angular.svg";
import aws from "../../static/images/skills/aws.svg";
import csharp from "../../static/images/skills/csharp.svg";
import docker from "../../static/images/skills/docker.svg";
import dotnet from "../../static/images/skills/dotnet.svg";
import go from "../../static/images/skills/go.svg";
import graphql from "../../static/images/skills/graphql.svg";
import jenkins from "../../static/images/skills/jenkins.svg";
import mongodb from "../../static/images/skills/mongodb.svg";
import postgresql from "../../static/images/skills/postgresql.svg";
import python from "../../static/images/skills/python.svg";
import react from "../../static/images/skills/react.svg";
import svelte from "../../static/images/skills/svelte.svg";
import swift from "../../static/images/skills/swift.svg";
import threejs from "../../static/images/skills/threejs.svg";
import threejsBlack from "../../static/images/skills/threejs-black.svg";
import typescript from "../../static/images/skills/typescript.svg";
import vue from "../../static/images/skills/vue.svg";

import javascript from "../../static/images/skills/javascript.svg";
import java from "../../static/images/skills/java.svg";
import django from "../../static/images/skills/django.svg";
import flask from "../../static/images/skills/flask.svg";
import sql from "../../static/images/skills/sqlite.svg";
import htmlcss from "../../static/images/skills/html.svg";
import c from "../../static/images/skills/c.svg";
import git from "../../static/images/skills/git.svg";
import jira from "../../static/images/skills/jira.svg";
import hadoop from "../../static/images/skills/hadoop.svg";
import jquery from "../../static/images/skills/jquery.svg";

const iconPicker = (logo: string, isDark: boolean) => {
  switch (logo) {
    case Icon.UNSW:
      return unsw;
    case Icon.UWA:
      return uwa;
    case Icon.Angular:
      return angular;
    case Icon.AWS:
      return aws;
    case Icon.CSharp:
      return csharp;
    case Icon.Docker:
      return docker;
    case Icon.DotNet:
      return dotnet;
    case Icon.Go:
      return go;
    case Icon.GraphQL:
      return graphql;
    case Icon.Jenkins:
      return jenkins;
    case Icon.MongoDB:
      return mongodb;
    case Icon.PostgreSQL:
      return postgresql;
    case Icon.Python:
      return python;
    case Icon.React:
      return react;
    case Icon.Svelte:
      return svelte;
    case Icon.Swift:
      return swift;
    case Icon.ThreeJS:
      return isDark ? threejs : threejsBlack;
    case Icon.TypeScript:
      return typescript;
    case Icon.Vue:
      return vue;
    case Icon.JavaScript:
      return javascript;
    case Icon.Java:
      return java;
    case Icon.Django:
      return django;
    case Icon.Flask:
      return flask;
    case Icon.SQL:
      return sql;
    case Icon.HTMLCSS:
      return htmlcss;
    case Icon.C:
      return c;
    case Icon.Git:
      return git;
    case Icon.Jira:
      return jira;
    case Icon.Hadoop:
      return hadoop;
    case Icon.jQuery:
      return jquery;
    case Icon.Starbucks:
      return starbucks;
    case Icon.Gdut:
      return gdut;
    default:
      return Icon.Empty;
  }
};

export default iconPicker;
