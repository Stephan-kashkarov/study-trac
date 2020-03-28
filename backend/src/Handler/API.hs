{-# LANGUAGE OverloadedStrings #-}
module Handler.API where

import Import

getTestR :: Handler Value
getTestR = return (String "getTestR")

postTestR :: Handler Value
postTestR = return (String "postTestR")