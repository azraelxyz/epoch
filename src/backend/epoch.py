import time

import endpoints
from protorpc import messages
from protorpc import message_types
from protorpc import remote


package = 'Epoch'


class HumanReadableTime(messages.Message):
    message = messages.StringField(1)


@endpoints.api(name='epoch', version='v1')
class EpochApi(remote.Service):
    """Epoch API v1."""

    TIME_RESOURCE = endpoints.ResourceContainer(
            message_types.VoidMessage,
            sec=messages.IntegerField(1, variant=messages.Variant.INT64))

    @endpoints.method(TIME_RESOURCE, HumanReadableTime,
                      path='epoch/{sec}', http_method='GET',
                      name='epoch.get')
    def epoch_get(self, request):
        try:
            msg = time.strftime("%a, %d %b %Y %H:%M:%S +0000",
                                   time.localtime(request.sec))
            return HumanReadableTime(message=msg)
        except:
            raise endpoints.NotFoundException('Convert error')
