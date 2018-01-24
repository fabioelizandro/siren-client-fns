FROM node:8.5.0

RUN curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > /bin/cc-test-reporter
RUN chmod +x /bin/cc-test-reporter
