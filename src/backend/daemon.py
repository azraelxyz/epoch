import endpoints

from epoch import EpochApi

apis = [EpochApi]
APPLICATION = endpoints.api_server(apis)
