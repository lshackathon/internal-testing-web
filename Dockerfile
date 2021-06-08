FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build-env

WORKDIR /app

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

COPY . ./

ARG GIT_USERNAME
ARG GIT_PERSONAL_ACCESS_TOKEN

RUN dotnet restore ./InternalTestingWeb
RUN dotnet test ./InternalTestingWeb.Tests/InternalTestingWeb.Tests.csproj
RUN dotnet publish ./InternalTestingWeb/InternalTestingWeb.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

RUN apt-get update
RUN apt-get install -y wget gnupg2
RUN echo 'deb http://apt.newrelic.com/debian/ newrelic non-free' | tee /etc/apt/sources.list.d/newrelic.list
RUN wget -O- https://download.newrelic.com/548C16BF.gpg | apt-key add -
RUN apt-get update
RUN apt-get install newrelic-netcore20-agent

WORKDIR /app
COPY --from=build-env /app/out .

ENTRYPOINT ["dotnet","InternalTestingWeb.dll"]
