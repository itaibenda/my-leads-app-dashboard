import { WixDesignSystemProvider } from '@wix/design-system';
import { Page, Button, Box, Layout, Cell, Card } from '@wix/design-system';
import "@wix/design-system/styles.global.css";

const Manage = () => <WixDesignSystemProvider>
<Page height="60vh">
<Page.Header
  title="My Leads App"
  actionsBar={
    <Box gap="SP2">
      <Button>Update</Button>
    </Box>
  }
/>
<Page.Content>
  <Layout>
    <Cell>
      <Card>
        <Card.Header title="Program details" />
        <Card.Divider />
        <Card.Content>
          <Box height="420px" />
        </Card.Content>
      </Card>
    </Cell>
    <Cell>
      <Page.Footer divider>
        <Page.Footer.End>
          <Box gap="SP2">
            <Button priority="secondary">Cancel</Button>
            <Button>Save</Button>
          </Box>
        </Page.Footer.End>
      </Page.Footer>
    </Cell>
  </Layout>
</Page.Content>
</Page></WixDesignSystemProvider>;

export default Manage;